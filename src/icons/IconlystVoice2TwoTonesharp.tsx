import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2TwoTonesharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M13.788 7.438h2.153M12.708 11.049h3.235M12.248 22.104v-2.771"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.248 15.702a3.704 3.704 0 0 1-3.695-3.711V6.817a3.704 3.704 0 0 1 3.695-3.713 3.704 3.704 0 0 1 3.696 3.713v5.174a3.703 3.703 0 0 1-3.696 3.711"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M19.528 12.02c0 4.038-3.258 7.312-7.279 7.312-4.02 0-7.277-3.274-7.277-7.312"
    />
  </Svg>
);
export default IconlystVoice2TwoTonesharp;
