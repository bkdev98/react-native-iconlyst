import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThunderWindTwoTone = ({
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
      d="M13.944 19.202a2.599 2.599 0 0 0 4.755-1.454c0-1.435-1.049-2.6-2.6-2.6h-5.671M16.378 6.83a2.747 2.747 0 0 1 4.736 1.895c0 1.515-1.007 2.717-2.746 2.746h-4.822M9.477 18.553h-5.13M13.951 4.606h-2.589"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.555 10.658H4.59a.32.32 0 0 1-.313-.262L3.12 4.027a.318.318 0 0 1 .313-.375h4.292c.211 0 .364.202.306.406L6.989 7.704a.318.318 0 0 0 .306.406h3.456c.252 0 .404.278.269.49l-3.56 5.593c-.17.27-.587.148-.587-.17v-3.047a.32.32 0 0 0-.318-.318"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThunderWindTwoTone;
