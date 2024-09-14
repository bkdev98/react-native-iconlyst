import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.54 9.998H7.432v1.73H9.54a.864.864 0 1 0 0-1.73M9.54 13.229H7.432v1.73H9.54a.863.863 0 0 0 .866-.86.87.87 0 0 0-.866-.87M15.218 11.88c-.564 0-1.05.347-1.251.84h2.494a1.34 1.34 0 0 0-1.243-.84"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.117 14.219h-3.104a1.44 1.44 0 0 0 2.302.386.75.75 0 0 1 1.053 1.068 2.936 2.936 0 0 1-5.001-2.084v-.36a2.853 2.853 0 0 1 2.851-2.85 2.853 2.853 0 0 1 2.85 2.85c0 .564-.427.99-.951.99m-5.211-.12a2.365 2.365 0 0 1-2.366 2.36H7.005c-.592 0-1.074-.48-1.074-1.07v-5.82a1.077 1.077 0 0 1 1.074-1.071H9.54a2.366 2.366 0 0 1 2.366 2.36 2.36 2.36 0 0 1-.641 1.62c.398.425.641.995.641 1.62m2.098-5.58h2.426a.75.75 0 0 1 0 1.5h-2.426a.75.75 0 0 1 0-1.5m2.213-5.51H7.782c-3.159 0-5.282 2.223-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBehanceBold;
