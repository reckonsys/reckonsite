AWS_PROFILE=reckonsys
AWS_BUCKET=appbeta-reckonsys
AWS_DIST=E3P4MJTOVAT73J
npm run build
aws s3 --profile $AWS_PROFILE rm s3://$AWS_BUCKET/*
aws s3 --profile $AWS_PROFILE sync dist s3://$AWS_BUCKET/ --acl public-read
aws cloudfront --profile $AWS_PROFILE create-invalidation --distribution-id $AWS_DIST --paths /index.html