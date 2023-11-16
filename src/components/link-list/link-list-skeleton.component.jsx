import { Skeleton } from "antd"
import { SkeletonBox } from "./link-list.style"
const LinkListSkeleton = () => {
    return (
        <>
            <SkeletonBox>
                <Skeleton.Avatar style={{ margin: 20 }} size='large' loading={true} />
                <Skeleton size='large' loading={true} />
            </SkeletonBox>
            <SkeletonBox>
                <Skeleton.Avatar style={{ margin: 20 }} size='large' loading={true} />
                <Skeleton size='large' loading={true} />
            </SkeletonBox>
        </>
    )
}
export default LinkListSkeleton;