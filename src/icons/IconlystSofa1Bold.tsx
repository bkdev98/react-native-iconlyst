import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa1Bold = ({
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
      d="M9.99 9.362c.41 0 .76.34.76.75 0 .42-.34.75-.75.75h-.01a.749.749 0 1 1 0-1.5m.01-3c.41 0 .75.34.75.75 0 .42-.33.75-.74.75H10a.749.749 0 1 1 0-1.5m4 3c.41 0 .75.34.75.75 0 .42-.33.75-.74.75H14a.749.749 0 1 1 0-1.5m0-3c.41 0 .75.34.75.75 0 .42-.33.75-.74.75H14a.749.749 0 1 1 0-1.5m-5.37 6.25v.09a.3.3 0 0 0 .3.3h6.15a.3.3 0 0 0 .3-.3v-.09c0-1.99 1.63-3.62 3.61-3.62h.073c.187.004.353-.141.348-.328-.02-.726-.048-1.339-.091-1.692-.18-2.03-1.78-3.66-3.8-3.86-2.32-.29-4.67-.29-6.97 0a4.17 4.17 0 0 0-3.81 3.85c-.035.365-.07.988-.092 1.716a.31.31 0 0 0 .325.314h.037c1.99 0 3.62 1.63 3.62 3.62"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.781 10.75a2.5 2.5 0 0 0-1.771-.754h-.016a2.626 2.626 0 0 0-2.617 2.62v.84c0 .303-.249.55-.555.55H8.184a.55.55 0 0 1-.553-.55v-.842A2.63 2.63 0 0 0 5.01 9.996a2.51 2.51 0 0 0-2.505 2.5c-.018.883.014 1.77.095 2.633.176 2.027 1.779 3.606 3.771 3.751.267.041.755.07 1.365.09l-.371 1.156a.75.75 0 1 0 1.428.46l.491-1.53c.006-.018.002-.036.006-.053a236 236 0 0 0 5.69-.01c.005.02 0 .042.007.063l.492 1.53a.75.75 0 0 0 1.428-.46l-.376-1.169c.518-.018.915-.042 1.057-.072a4.1 4.1 0 0 0 3.8-3.75c.083-.868.121-1.748.11-2.605a2.5 2.5 0 0 0-.717-1.78"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSofa1Bold;
