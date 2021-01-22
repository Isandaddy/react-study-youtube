class Youtube{
    constructor(httpClient){
        this.youtube = httpClient
    }

    async mostPopular(){
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25
            }
        }).catch(function (error) {
            console.log(error);
          });

          
        return response.data.items;
        
    }

    async search(query){
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                q: query,
                type: 'video',
            }
        }).catch(function (error) {
            console.log(error);
          });
          console.log(response);
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;