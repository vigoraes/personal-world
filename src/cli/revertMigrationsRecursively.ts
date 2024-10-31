import { exec } from 'child_process';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from '../app.module';

function revertAllMigrations(): void {
    exec('ts-node node_modules/typeorm/cli.js migration:revert -d src/database/datasource.ts', (error: any, stdout: any, stderr: any) => {
        if (error) {
            console.error(`Erro: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Stderr: ${stderr}`);
            return;
        }
        console.log(stdout);

        if (stdout.includes('has been  reverted successfully.')) {
            // Continua revertendo até que não haja mais migrações a reverter
            revertAllMigrations();
        } else {
            console.log('Todas as migrações foram revertidas.');
        }
    });
}

revertAllMigrations()
