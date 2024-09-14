import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCampTentTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.914 20.888-2.92-8.326-5.543-5.52-5.543 5.52-2.92 8.326M3.5 20.889h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.431 12.062-.628 8.826M17.486 12.062l.629 8.826M16.713 20.86s-3.192-4.286-4.104-8.906c-.913 4.62-4.103 8.907-4.103 8.907M12.452 7.043V3.11h3.24v2.434h-3.23"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCampTentTwoTone;
