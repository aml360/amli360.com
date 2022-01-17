import { Component, OnInit } from '@angular/core';
import { arrayGenerator, NonoArray, isGameCompleted, distribuidor } from 'nonogram-game-lib';

@Component({
	selector: 'app-nonogram',
	templateUrl: './page.component.html',
	styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
	private gameArraySolution: NonoArray = arrayGenerator(5, 5);
	gameArray = this.matrixNullGenerator(5, 5);
	distribuidor = distribuidor(this.gameArraySolution);

	ngOnInit(): void {
		console.log(this.distribuidor);
		console.log(this.gameArraySolution);
	}

	cellClicked(nRow: number, nColumn: number): void {
		const cellActualState = this.gameArray[nRow][nColumn];
		this.gameArray[nRow][nColumn] = (() => {
			switch (cellActualState) {
				case undefined:
					return true;
				case true:
					return false;
				case false:
					return undefined;
			}
		})();
		if (this.isGameFinished()) {
			this.gameArray = this.gameArray.map(row => row.map(cell => (cell === undefined ? false : cell)));
			alert('Juego completado');
		}
	}

	/**
	 * @returns true if the game is completed
	 */
	isGameFinished(): boolean {
		const gameTable = this.gameArray.map(row => row.map(cell => (cell === undefined ? false : cell)));
		return isGameCompleted(gameTable, this.gameArraySolution);
	}

	matrixNullGenerator(nRows: number, nCols: number): (boolean | undefined)[][] {
		const cols: (boolean | undefined)[][] = [];
		for (let i = 0; i < nRows; i++) {
			const row: (boolean | undefined)[] = [];
			for (let j = 0; j < nCols; j++) {
				row.push(undefined);
			}
			cols.push(row);
		}
		return cols;
	}
}
