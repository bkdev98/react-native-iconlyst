import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerCloudOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.148 3.737c1.05-.979 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.128 1.49C21.41 4.725 22 6.127 22 7.782v4.543a.75.75 0 0 1-1.5 0V7.782c0-1.284-.45-2.273-1.17-2.945-.727-.677-1.79-1.087-3.106-1.087H8.276c-1.317 0-2.38.409-3.106 1.084C4.45 5.504 4 6.494 4 7.782v8.434c0 1.29.45 2.278 1.17 2.949.726.676 1.789 1.085 3.106 1.085h.917a.75.75 0 0 1 0 1.5h-.917c-1.627 0-3.078-.509-4.128-1.488C3.09 19.279 2.5 17.876 2.5 16.217V7.782c0-1.66.59-3.062 1.648-4.045"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.523 12a.75.75 0 0 1 .75-.75h9.197a.75.75 0 0 1 0 1.5H3.273a.75.75 0 0 1-.75-.75M6.863 16.135a.75.75 0 0 1 .75-.75h.523a.75.75 0 0 1 0 1.5h-.523a.75.75 0 0 1-.75-.75M6.863 7.865a.75.75 0 0 1 .75-.75h.523a.75.75 0 1 1 0 1.5h-.523a.75.75 0 0 1-.75-.75m4.739 0a.75.75 0 0 1 .75-.75h4.534a.75.75 0 0 1 0 1.5h-4.534a.75.75 0 0 1-.75-.75M13.813 14.785c.518-.685 1.353-1.232 2.535-1.232s2.017.547 2.536 1.232c.319.422.52.897.624 1.335.497.11.957.341 1.33.697.539.514.843 1.241.843 2.088a2.86 2.86 0 0 1-1.71 2.62c-.406.163-.81.225-1.131.225h-4.987a3.1 3.1 0 0 1-1.156-.24 2.86 2.86 0 0 1-1.681-2.605c0-.847.304-1.574.843-2.088a2.8 2.8 0 0 1 1.33-.697c.103-.438.305-.913.624-1.335m1.196.906c-.291.384-.404.847-.404 1.105a.75.75 0 0 1-.744.75c-.412.004-.744.143-.966.356-.217.206-.38.528-.38 1.003 0 .545.321 1.016.787 1.233.21.082.414.112.55.112h4.988c.14 0 .347-.029.558-.11a1.36 1.36 0 0 0 .783-1.235c0-.475-.163-.797-.379-1.003-.223-.213-.554-.352-.967-.356a.75.75 0 0 1-.743-.75c0-.258-.113-.72-.404-1.105-.268-.355-.68-.638-1.34-.638s-1.071.283-1.34.638"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerCloudOutline;
