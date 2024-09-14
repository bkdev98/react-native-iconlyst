import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKnifeAndForkBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M9.684 2.269a.65.65 0 0 0-.666-.254.64.64 0 0 0-.475.472.8.8 0 0 0-.021.245v3.83a.62.62 0 0 1-.412.574.63.63 0 0 1-.663-.163.65.65 0 0 1-.167-.461V2.547a.52.52 0 0 0-1.036-.026l-.08 1.589q-.022.478-.047.955-.013.13-.013.261a3 3 0 0 1-.017.287 4 4 0 0 0-.009.218c-.002.11-.005.221-.02.331 0 .138-.009.274-.017.411a6 6 0 0 0-.017.41c-.03.254-.026.51-.02.764.031.368.121.731.27 1.07.196.451.507.847.88 1.167a3.22 3.22 0 0 1 1.091 2.76l-.112.975c-.236 2.056-.41 3.563-.53 5.827-.023.367.07.744.28 1.048a1.576 1.576 0 0 0 2.184.412c.327-.218.566-.563.659-.945.054-.216.043-.439.033-.66l-.006-.13c-.054-1.001-.13-2.002-.214-3a26 26 0 0 0-.237-1.918 43 43 0 0 1-.191-1.368 4 4 0 0 1-.035-.94 3.2 3.2 0 0 1 1.099-2.087q.147-.13.284-.272a3.22 3.22 0 0 0 .861-2.004c.016-.154.007-.309-.002-.463q-.01-.133-.011-.265-.052-.964-.1-1.929l-.083-1.605c-.011-.082-.012-.165-.013-.247a2 2 0 0 0-.014-.252c-.01-.072-.01-.145-.011-.218 0-.105-.001-.21-.03-.311a.52.52 0 0 0-.363-.359.51.51 0 0 0-.498.135.53.53 0 0 0-.156.377v3.991a.62.62 0 0 1-1.21.203c-.034-.11-.033-.225-.031-.339V2.645a.62.62 0 0 0-.114-.376"
    />
    <Path
      fill={props.color}
      d="M18.655 20.578c-.002.387-.382.748-.774.668a1.1 1.1 0 0 1-.38-.152 2.7 2.7 0 0 1-.659-.609c-.454-.56-.792-1.207-1.07-1.87-.296-.688-.51-1.407-.699-2.13a23 23 0 0 1-.419-2.203 15 15 0 0 1-.152-2.406q.01-.153.014-.308.002-.12.01-.24l.023-.286c.024-.33.05-.66.146-.977a2.8 2.8 0 0 1 1.144-1.543c.234-.153.42-.387.492-.66.055-.193.039-.392.023-.59a36.976 36.976 0 0 0-.153-1.797 37 37 0 0 1-.151-1.771 4 4 0 0 1-.012-.548 1.32 1.32 0 0 1 1.036-1.127c.393-.09.824.031 1.123.3.282.24.443.605.458.973v17.276"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystKnifeAndForkBulk;
