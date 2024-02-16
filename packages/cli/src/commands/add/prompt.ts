import inquirer from "inquirer";
import { buildProviderChoices } from "./sub-commands/provider/prompt";
import { buildIntegrationChoices } from "./sub-commands/integration/prompt";
import chalk from "chalk";

const wrapChoices = (group: string, choices: any[]) => {
    return choices.map((choice) => {
        return {
            ...choice,
            name: ` . ${choice.name}`,
            value: {
                group,
                component: choice.value,
            },
        };
    });
};

export const addCommandPrompt = async () => {
    return await inquirer.prompt([
        {
            type: "list",
            name: "component",
            message: "What do you want to add?",
            choices: [
                new inquirer.Separator(chalk.bold("Provider")),
                ...wrapChoices("provider", buildProviderChoices()),
                new inquirer.Separator(chalk.bold("Integration")),
                ...wrapChoices("integration", buildIntegrationChoices()),
                new inquirer.Separator(chalk.bold("Resource")),
                {
                    name: chalk.blueBright(" .  Add new resource"),
                    value: {
                        group: "resource",
                        component: "resource",
                    },
                },
            ],
            pageSize: 25,
        },
    ]);
};
