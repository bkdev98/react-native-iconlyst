import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Brokensharp = ({
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
      d="M13.788 7.438h2.152M12.708 11.049h3.235M12.248 22.104v-2.771"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.249 15.702a3.703 3.703 0 0 1-3.695-3.711V6.817a3.704 3.704 0 0 1 3.695-3.713 3.704 3.704 0 0 1 3.696 3.713v5.174a3.703 3.703 0 0 1-3.696 3.711Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M19.528 12.02c0 4.039-3.258 7.313-7.28 7.313-4.018 0-7.276-3.274-7.276-7.313"
    />
  </Svg>
);
export default IconlystVoice2Brokensharp;
