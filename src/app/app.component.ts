import { Component } from '@angular/core';
import { GridApi, GridOptions } from 'ag-grid-community';
import 'ag-grid-enterprise';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly gridOptions: GridOptions = {
    autoGroupColumnDef: {
      headerName: 'Team',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
        suppressCount: true,
      },
    },
    columnDefs: [
      {
        headerName: 'Team',
        field: 'team',
        rowGroup: true,
        hide: true,
      },
      {
        headerName: 'Player Name',
        field: 'playerName',
      },
      {
        headerName: 'Hitting Stats',
        field: 'hittingStats',
        marryChildren: true,
        children: [
          {
            headerName: 'Batting Average',
            field: 'battingAverage',
            columnGroupShow: 'open',
          },
          {
            headerName: 'RBIs',
            field: 'rbis',
            columnGroupShow: 'close',
          },
          {
            headerName: 'Home Runs',
            field: 'homeRuns',
            columnGroupShow: 'close',
          },
        ],
      },
      {
        headerName: 'WAR',
        field: 'war',
      },
    ],
  };

  rowData = [
    {
      team: 'Chicago Cubs',
      playerName: 'Wilson Contreras',
      battingAverage: '.258',
      rbis: '37',
      homeRuns: '14',
      war: '2.9',
    },
    {
      team: 'Chicago Cubs',
      playerName: 'Patrick Wisdom',
      battingAverage: '.221',
      rbis: '47',
      homeRuns: '17',
      war: '1.3',
    },
  ];
}
