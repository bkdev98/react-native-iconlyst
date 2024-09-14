import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinterTemperatureOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.583 3.75A2.25 2.25 0 0 0 6.333 6v6.022a.75.75 0 0 1-.297.599c-1.034.78-1.703 2-1.703 3.379a4.25 4.25 0 0 0 8.5 0c0-1.38-.668-2.598-1.701-3.38a.75.75 0 0 1-.298-.598V6a2.25 2.25 0 0 0-2.25-2.25M4.833 6a3.75 3.75 0 1 1 7.5 0v5.665a5.71 5.71 0 0 1 2 4.335 5.75 5.75 0 0 1-11.5 0c0-1.743.786-3.287 2-4.335z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.582 15.276a.724.724 0 1 0 0 1.449.724.724 0 0 0 0-1.449M6.357 16a2.224 2.224 0 1 1 4.449.001A2.224 2.224 0 0 1 6.357 16"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.582 9.731a.75.75 0 0 1 .75.75v4.046a.75.75 0 0 1-1.5 0V10.48a.75.75 0 0 1 .75-.75M16.392 3.546a.75.75 0 0 1 1.06 0l.445.445.435-.435a.75.75 0 0 1 1.06 1.06l-.965.966a.75.75 0 0 1-1.06 0l-.976-.975a.75.75 0 0 1 0-1.06M17.367 10.138a.75.75 0 0 1 1.06 0l.965.965a.75.75 0 1 1-1.06 1.061l-.435-.435-.445.444a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.892 4.302a.75.75 0 0 1 .75.75v5.613a.75.75 0 1 1-1.5 0V5.052a.75.75 0 0 1 .75-.75M20.878 4.403a.75.75 0 0 1 .53.918l-.163.607.594.16a.75.75 0 1 1-.388 1.449l-1.319-.354a.75.75 0 0 1-.53-.919l.357-1.331a.75.75 0 0 1 .919-.53M13.406 8.718a.75.75 0 0 1 .918-.53l1.332.356a.75.75 0 0 1 .53.92l-.353 1.318a.75.75 0 1 1-1.449-.388l.16-.595-.608-.162a.75.75 0 0 1-.53-.919"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.973 6.081a.75.75 0 0 1-.275 1.025l-4.86 2.807a.75.75 0 0 1-.751-1.3l4.861-2.806a.75.75 0 0 1 1.025.274M22.37 8.708a.75.75 0 0 1-.53.919l-.595.16.163.606a.75.75 0 1 1-1.45.389l-.356-1.332a.75.75 0 0 1 .53-.919l1.319-.353a.75.75 0 0 1 .919.53M14.915 4.403a.75.75 0 0 1 .918.53l.353 1.319a.75.75 0 0 1-.53.919l-1.332.356a.75.75 0 1 1-.388-1.449l.607-.162-.159-.595a.75.75 0 0 1 .53-.918"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.813 6.076a.75.75 0 0 1 1.024-.274l4.861 2.807a.75.75 0 1 1-.75 1.299L15.087 7.1a.75.75 0 0 1-.274-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWinterTemperatureOutline;
