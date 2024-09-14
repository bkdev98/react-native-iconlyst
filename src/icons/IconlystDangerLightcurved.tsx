import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerLightcurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21c-6.494 0-9.043-.461-9.456-2.797-.414-2.335 2.23-6.726 3.044-8.174C8.313 5.184 10.164 3 12 3s3.687 2.184 6.412 7.028c.814 1.45 3.458 5.84 3.044 8.175C21.045 20.54 18.495 21 12 21"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.5v3.895M11.996 15.895h.009"
    />
  </Svg>
);
export default IconlystDangerLightcurved;
