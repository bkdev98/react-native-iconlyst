import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookAi2TwoTone = ({
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
      d="M13.162 20.224a2.31 2.31 0 0 1-2.324 0C8.825 19.057 3 19.077 3 16.095V5.754c0-2.345 1.957-2.507 3.973-2.02M12.32 5.154c1.782-1.034 8.68-3.526 8.68.6v7.218"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.655 20.203c-1.677-3.169-4.683-3.045-4.683-5.398V4.785c0-1.461.426-2.423 1.532-2.423 1.092 0 2.067.613 2.799 1.231.594.502.878 1.27.878 2.048v1.514"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.404 15.338.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.226l-.1.273-.102-.273a3.76 3.76 0 0 0-2.221-2.226l-.273-.1.273-.102a3.76 3.76 0 0 0 2.221-2.225zM13.177 12.981a1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179A1.77 1.77 0 0 0 12 14.159a1.77 1.77 0 0 0 1.177-1.178"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBookAi2TwoTone;
