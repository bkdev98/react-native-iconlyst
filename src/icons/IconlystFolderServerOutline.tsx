import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderServerOutline = ({
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
      d="M6.935 4.51c-.384.482-.604 1.265-.604 2.438v4.45c0 1.096.32 1.874.825 2.378s1.286.824 2.386.824h5.407c1.096 0 1.874-.32 2.378-.823.503-.504.823-1.282.823-2.379v-.006l.02-2.477c0-1.203-.225-1.933-.592-2.364-.345-.403-.943-.688-2.07-.688H13.54a2.34 2.34 0 0 1-1.867-.934l-.634-.843a.84.84 0 0 0-.67-.336H8.982c-1.09 0-1.69.315-2.046.76m-1.173-.934c.723-.908 1.824-1.326 3.22-1.326h1.39a2.34 2.34 0 0 1 1.866.935l.634.842c.158.21.407.335.67.336h1.966c1.364 0 2.472.35 3.21 1.214.716.838.952 2.01.952 3.341v.006l-.02 2.477c0 1.39-.413 2.586-1.262 3.436-.851.85-2.049 1.263-3.439 1.263H9.542c-1.393 0-2.593-.412-3.445-1.262-.853-.85-1.266-2.049-1.266-3.44v-4.45c0-1.309.236-2.5.931-3.372M12.25 18.755a.747.747 0 1 0 0 1.494.747.747 0 0 0 0-1.494m-2.248.747a2.247 2.247 0 1 1 4.494 0 2.247 2.247 0 0 1-4.494 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.684 19.503a.75.75 0 0 1 .75-.75h4.315a.75.75 0 0 1 0 1.5H6.434a.75.75 0 0 1-.75-.75m7.311 0a.75.75 0 0 1 .75-.75h4.32a.75.75 0 1 1 0 1.5h-4.32a.75.75 0 0 1-.75-.75M12.248 14.613a.75.75 0 0 1 .75.75v2.638a.75.75 0 1 1-1.5 0v-2.638a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderServerOutline;
