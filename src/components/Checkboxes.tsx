import { Checkbox } from "@avaya/neo-react";

export const TwoCheckboxes = () => {
    return (
        <main className="App">
            <h1>Checkbox</h1>

            <Checkbox name="example" value="1">
                example label 1
            </Checkbox>
            <Checkbox name="example" value="2" defaultChecked>
                example label 2
            </Checkbox>
        </main>
    );
}