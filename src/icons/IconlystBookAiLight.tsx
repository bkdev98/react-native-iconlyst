import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookAiLight = ({
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
      d="M5.175 18.374c2.376.171 4.444 1.143 5.663 1.85.721.417 1.603.417 2.324 0 1.219-.707 3.287-1.679 5.663-1.85 1.216-.087 2.175-1.06 2.175-2.279V5.754c0-1.372-1.2-2.424-2.564-2.275-2.211.242-4.122 1.146-5.274 1.814a2.31 2.31 0 0 1-2.324 0C9.686 4.626 7.775 3.722 5.564 3.48 4.2 3.33 3 4.382 3 5.754v10.341c0 1.219.96 2.192 2.175 2.28M12 15.93v4.55"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.568 13.34-.101-.273a3.76 3.76 0 0 0-2.222-2.225l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225l.1-.274.102.274a3.76 3.76 0 0 0 2.222 2.225l.273.1-.273.102a3.76 3.76 0 0 0-2.222 2.225zM14.879 14.582a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.179 1.77 1.77 0 0 0 1.176 1.179 1.77 1.77 0 0 0-1.176 1.178"
    />
  </Svg>
);
export default IconlystBookAiLight;
