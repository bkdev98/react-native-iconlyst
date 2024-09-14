import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFXLight = ({
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
      d="M21 8.025v7.948c0 2.944-1.843 5.021-4.788 5.021H7.778C4.833 20.994 3 18.917 3 15.973V8.025C3 5.08 4.843 3.004 7.778 3.004h8.434C19.157 3.004 21 5.08 21 8.024"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.416 14.735V9.262h2.779M7.416 12h2.512M12.7 14.733l2.08-2.737M14.78 11.999l2.08-2.737M14.78 11.999 12.7 9.262M14.78 12l2.08 2.737"
    />
  </Svg>
);
export default IconlystFXLight;
