## Run the app in local cluster
### Build the Docker image and push to Docker hub
```shell
docker build -t vinhlee95/fitness-backend .
docker push
```

### Apply the deployment manifest
```shell
skaffold dev
```
[Then expose the deployment](https://kubernetes.io/docs/tutorials/stateless-application/expose-external-ip-address/) via a `Service` object of type `LoadBalancer`:
```shell
kubectl expose deployment fitness-backend --type=LoadBalancer --name=fitness-backend-service
```
Inspecting the new service, the `EXTERNAL-IP` should point to `localhost`:
```shell
kubectl get service 

NAME                      TYPE           CLUSTER-IP      EXTERNAL-IP   PORT(S)          AGE
fitness-backend-service   LoadBalancer   10.110.87.127   localhost     3000:32149/TCP   6s
```

### Verify the app
First get NodePort of the service:
```shell
$ kubectl describe services fitness-backend-service
```

The output should be similar to this:
```shell
NodePort: <unset>  <PORT_NUMBER>/TCP
```

Then, use `curl` to verify the app:
```shell
$ curl localhost:<PORT_NUMBER>/api
Hello World!
```
