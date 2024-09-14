import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSibappTwoTone = ({
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
      d="M12.406 4.132c.884-.94 2.284-1.34 3.535-1.027-.05.966-.406 1.946-1.12 2.62-.877.92-2.269 1.264-3.487.947.09-.928.379-1.88 1.072-2.54"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.924 8.961c.399-.08.809-.056 1.212-.062 1.518.009 3.037-.013 4.555.012 1.799.148 3.292 1.78 3.356 3.573.01 1.556 0 3.114.005 4.671a3.85 3.85 0 0 1-1.02 2.654c-.7.76-1.721 1.2-2.754 1.192Q11.992 21 9.705 21a3.7 3.7 0 0 1-2.298-.792c-.905-.691-1.439-1.816-1.457-2.948-.003-1.487.002-2.973-.002-4.459-.018-1.044.377-2.11 1.142-2.833a3.84 3.84 0 0 1 1.834-1.007m.81 2.596c-.653.06-1.158.709-1.128 1.351.002 1.381-.005 2.765.003 4.145-.01.692.621 1.311 1.312 1.295 1.382.001 2.764.004 4.146 0 .7.027 1.334-.599 1.329-1.295.007-1.384.004-2.769.002-4.153.032-.712-.598-1.398-1.325-1.351-1.447.005-2.893-.014-4.338.008"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSibappTwoTone;
