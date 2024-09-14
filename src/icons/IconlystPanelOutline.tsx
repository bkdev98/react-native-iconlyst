import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPanelOutline = ({
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
      fillRule="evenodd"
      d="M4.07 9.433C4.81 8.639 5.86 8.2 7.082 8.2h9.837c1.224 0 2.273.438 3.013 1.232.735.789 1.108 1.868 1.108 3.06v4.964c0 1.193-.373 2.273-1.108 3.061-.74.795-1.79 1.232-3.014 1.232H7.08c-1.224 0-2.273-.437-3.013-1.232-.734-.788-1.107-1.868-1.107-3.06v-4.964c0-1.194.375-2.273 1.11-3.061m1.098 1.023c-.433.464-.707 1.156-.707 2.038v4.963c0 .884.273 1.575.705 2.04.426.457 1.062.753 1.915.753h9.836c.854 0 1.49-.296 1.916-.754.433-.464.706-1.155.706-2.039v-4.963c0-.883-.273-1.575-.705-2.039-.427-.458-1.063-.754-1.916-.754H7.08c-.85 0-1.486.296-1.913.755M10.264 4.28a2.03 2.03 0 1 1 4.06 0 2.03 2.03 0 0 1-4.06 0m2.03-.53a.53.53 0 1 0 0 1.06.53.53 0 0 0 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.761 4.553a.75.75 0 0 1 1.06.032l3.63 3.85a.75.75 0 1 1-1.092 1.03l-3.63-3.851a.75.75 0 0 1 .032-1.06m-.93.001a.75.75 0 0 1 .03 1.06L8.224 9.465a.75.75 0 1 1-1.09-1.03l3.639-3.851a.75.75 0 0 1 1.06-.03M8.027 13.144a.75.75 0 0 1 .75-.75h3.224a.75.75 0 1 1 0 1.5H8.777a.75.75 0 0 1-.75-.75m0 3.6a.75.75 0 0 1 .75-.75h6.447a.75.75 0 0 1 0 1.5H8.777a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPanelOutline;
