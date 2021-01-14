<template>
    <div>

        <!-- File Input -->
        <div class="pb-3">
            <label class="pr-3" for="image">Upload Product Image</label>
            <input type="file" name="image" accept="image/*" @change="previewImage">
        </div>

        <!-- Progress Bar -->
        <div class="shadow w-full bg-gray-100">
            <div class="bg-yellow-500 text-xs leading-none py-1 text-center" :style="{ width: progressPercent + '%' }">{{ progressPercent }}%</div>
        </div>

        <!-- Upload Button -->
        <my-base-button class="my-3 mx-auto block" @click="onUpload">Upload</my-base-button>
    </div>
</template>

<script>
export default {
    name: 'UploadImage',
    data() {
        return {
            imageData: null,
        }
    },
    props: ['progressPercent'],
    methods: {
        previewImage(event) {
            this.imageData = event.target.files[0]
        },
        onUpload() {
            // Convert File to base64 string & emit
           const file = this.imageData
           const reader = new FileReader()

           let rawImg
           reader.onloadend = () => {
               rawImg = reader.result
                this.$emit('imageDecoded', rawImg)
           }
           reader.readAsDataURL(file)
           
           // this.picture = null
            
            // const storageRef = firebase.storage().ref(`$(this.imageData.name`).put(this.imageData)
            // storageRef.on('state_changed', snapshot => {
            //     this.progressPercent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            // }, error => {console.log(error.message)},
            // () => {this.progressPercent = 100
            // storageRef.snapshot.ref.getDownloadURL().then((url) => {
            //     this.picture = url
            // })})
        }
    },
    emits: ['imageDecoded'],
}
</script>