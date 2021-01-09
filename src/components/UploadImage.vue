<template>
    <div>
        <div class="pb-3">
            <label class="pr-3" for="image">Upload Product Image</label>
            <input type="file" name="image" id="image" ref="imageInput">
        </div>
        <div class="shadow w-full bg-gray-100">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center text-white" :style="{ width: computedWidth }">{{ progressPercent }}%</div>
        </div>
        <my-base-button class="my-3 mx-auto block" @click="onUpload">Upload</my-base-button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'UploadImage',
    data() {
        return {
            progressPercent: 0,
            imageData: null,
            picture: null,
        }
    },
    methods: {
        onUpload() {
            let file = this.$refs.imageInput.value
            let storageRef = firebase.storage().ref()
            console.log(storageRef)


            let metadata = {
                contentType: 'image/jpeg'
            }

            let uploadTask = storageRef.child('images/' + file.name).put(file, metadata)

            uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
            function(snapshot) {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                return progress
            })

            // console.log(this.$refs.imageInput.value)

            // this.progressPercent = progress
            console.log('Success!!!')
        }
    },
    computed: {
        computedWidth() {
            return this.progressPercent + '%'
        }
    }
}
</script>