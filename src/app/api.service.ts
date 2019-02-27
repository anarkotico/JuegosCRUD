import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Game } from './model/game';
import { User } from './model/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiBase="http://localhost:3001/api/",
apiUrl = apiBase+"games/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  user: User=null;
  constructor(private http: HttpClient) { }
 
  getGames (): Observable<Game[]> {
    return this.http.get<Game[]>(apiUrl)
      .pipe(
        tap(games => console.log('Fetch games')),
        catchError(this.handleError('getGames', []))
      );
  }

  getGame(id: string): Observable<Game> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Game>(url).pipe(
      tap(_ => console.log(`fetched game id=${id}`)),
      catchError(this.handleError<Game>(`getGame id=${id}`))
    );
  }

  addGame (game): Observable<Game> {
    return this.http.post<Game>(apiUrl, game, httpOptions).pipe(
      tap((game: Game) => console.log(`added game w/ id=${game._id}`)),
      catchError(this.handleError<Game>('addGame'))
    );
  }

  updateGame (id, game): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, game, httpOptions).pipe(
      tap(_ => console.log(`updated game id=${id}`)),
      catchError(this.handleError<any>('updateGame'))
    );
  }

  deleteGame (id): Observable<Game> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Game>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted game id=${id}`)),
      catchError(this.handleError<Game>('deleteGame'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
