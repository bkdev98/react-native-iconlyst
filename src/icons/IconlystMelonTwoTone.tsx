import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMelonTwoTone = ({
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
      d="M12.304 20.733a6.97 6.97 0 1 1 4.99-5.761"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.663 3c.284.65 1.46 1.972 3.896 2.07M10.271 7.058c.027-.676.211-2.135.73-2.557M9.95 19.154a6.301 6.301 0 0 0 10.618-3.13c.111-.523-.314-.977-.848-.99l-10.638-.236c-.534-.012-.98.424-.89.95a6.3 6.3 0 0 0 1.758 3.406"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.023 14.842c.49.01.874.408 1.069.859a2.52 2.52 0 0 0 3.977.895 2.5 2.5 0 0 0 .605-.793c.214-.442.615-.822 1.106-.811"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMelonTwoTone;
