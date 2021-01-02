import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
 

export interface Profile {
  id?: string;
  name: string;
  phone: string;

}
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private profiles: Observable<Profile[]>;
  private profileCollection: AngularFirestoreCollection<Profile>;

  constructor(private firestore: AngularFirestore) { 
    this.profileCollection = this.firestore.collection<Profile>('profiles');
    this.profiles = this.profileCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getProfiles(): Observable<Profile[]> {
    return this.profiles;
  }
 
  getProfile(id: string): Observable<Profile> {
    return this.profileCollection.doc<Profile>(id).valueChanges().pipe(
      take(1),
      map(idea => {
        idea.id = id;
        return idea
      })
    );
  }

  addProfile(profile: Profile): Promise<DocumentReference> {
    return this.profileCollection.add(profile);
  }
 
  updateProfile(profile: Profile): Promise<void> {
    return this.profileCollection.doc(profile.id).update({ name: profile.name, phone: profile.phone });
  }
 
}

