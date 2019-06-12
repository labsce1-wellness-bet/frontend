import React from "react";
import React, { useState } from "react";
/* import { VictoryPie } from "victory";*/
import { VictoryChart } from "victory";
import { VictoryGroup } from "victory";
import { VictoryArea } from "victory";

export interface HomeProps { }

function Chart() {
    const [todos, setTodos] = useState([
	{
	    text: 'Learn about React',
	    isCompleted: false
	},
	{
	    text: 'todo2',
	    isCompleted: false
	},
	{
	    text: 'Build app',
	    isCompleted: false
	}
    ]);
    return (
        <div className="app">
            <div className="todo-list">
		{todos.map((todo, index) => (
                    <Todo key={index} index="{index} todo={todo}" />
		))}
	    </div>
	</div>
    )
}

const Callback: React.SFC<HomeProps> = () => {
    
    return <div>
	<VictoryChart width={400} height={400}>
            <VictoryGroup
		style={{
		    data: { strokeWidth: 3, fillOpacity: 0.4 }
		}}
            >
		<VictoryArea
		    style={{
			data: { fill: "cyan", stroke: "cyan" }
		    }}
		    data={[
			{ x: 1, y: 2 },
			{ x: 2, y: 3 },
			{ x: 3, y: 5 },
			{ x: 4, y: 4 },
			{ x: 5, y: 7 }
		    ]}
		/>
		<VictoryArea
		    style={{
			data: { fill: "magenta", stroke: "magenta" }
		    }}
		    data={[
			{ x: 1, y: 3 },
			{ x: 2, y: 2 },
			{ x: 3, y: 6 },
			{ x: 4, y: 2 },
			{ x: 5, y: 6 }
		    ]}
		/>
            </VictoryGroup>
	</VictoryChart>
    </div>;
};

export default Callback;

