import { useState, useEffect } from "react";
import firebase from "../../../firebase";
import 'firebase/storage'; 
import { Photo } from '../../../domain/photos-types'

interface ProgressResponse { value: number }

// the firebase reference to storage
const storageRef = firebase.storage().ref();

export function useFirebaseUpload(): [{
    data: Photo | undefined,
    isLoading: boolean,
    isError: any,
    progress: ProgressResponse | null
},
    Function
] {
    // the data from the file upload response
    const [data, setData] = useState<Photo | undefined>();

    // sets properties on the file to be uploaded
    const [fileData, setFileData] = useState<File | null>();

    // if we are loading a file or not
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // if an error happened during the process
    const [isError, setIsError] = useState<any>(false);

    // used for tracking the % of upload completed
    const [progress, setProgress] = useState<ProgressResponse | null>(null);

    // this function will be called when the any properties in the dependency array changes
    useEffect(() => {
        const uploadData = async () => {
            // initialize upload information
            setIsError(false);
            setIsLoading(true);

            setProgress({ value: 0 });

            if (!fileData) return;

            // wrap the whole thing in a try catch block to update the error state
            try {
                let fName = `${(new Date()).getTime()}-${fileData.name}`

                // setting the firebase properties for the file upload
                let ref = storageRef.child("images/" + fName);
                let uploadTask = ref.put(fileData);

                // tracking the state of the upload to assist in updating the
                // application UI
                uploadTask.on(
                    firebase.storage.TaskEvent.STATE_CHANGED,
                    _progress => {
                        var value =
                            (_progress.bytesTransferred / _progress.totalBytes);
                        console.log("Upload is " + value * 100 + "% done");
                        setProgress({ value });
                    },
                    _error => {
                        setIsLoading(false);
                        setIsError(_error);
                    },
                    async () => {
                        setIsError(false);
                        setIsLoading(false);

                        // set the data when upload has completed
                        setData(fName);

                        // reset progress
                        setProgress(null);
                    }
                );
            } catch (_error) {
                setIsLoading(false);
                setIsError(_error);
            }
        };

        fileData && uploadData();
    }, [fileData]);

    console.log('data', data);

    return [{ data, isLoading, isError, progress }, setFileData];
}

export default useFirebaseUpload;