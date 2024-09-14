import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateTextAltOutline = ({
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
      d="M17.957 21.575a.75.75 0 0 1-.704-.49l-.118-.321a3.66 3.66 0 0 0-2.162-2.165l-.32-.119a.75.75 0 0 1 0-1.406l.32-.119a3.66 3.66 0 0 0 2.162-2.165l.118-.32a.75.75 0 0 1 1.407 0l.119.32a3.66 3.66 0 0 0 2.162 2.165l.32.119a.75.75 0 0 1 0 1.406l-.32.119a3.66 3.66 0 0 0-2.162 2.165l-.119.32a.75.75 0 0 1-.703.49m1.335-3.798a5.2 5.2 0 0 1-1.335-1.336 5.2 5.2 0 0 1-1.335 1.336c.523.36.976.813 1.335 1.336a5.2 5.2 0 0 1 1.335-1.336M14.517 2.465c.715.128 1.372.552 1.85.903s1.078.852 1.414 1.496c.175.336.288.73.26 1.165-.03.438-.197.859-.488 1.255L8.004 20.251c-.387.527-.97.877-1.616.974l-2.259.335a1.32 1.32 0 0 1-1.495-1.099l-.354-2.256a2.45 2.45 0 0 1 .446-1.833l9.55-12.967c.29-.396.643-.682 1.051-.84a2.2 2.2 0 0 1 1.19-.1m-.649 1.499c-.1.038-.233.124-.384.33L3.935 17.26a.95.95 0 0 0-.173.712l.326 2.078 2.08-.31a.95.95 0 0 0 .627-.377l9.55-12.967c.15-.206.192-.359.199-.465a.7.7 0 0 0-.093-.373c-.166-.319-.52-.65-.973-.981-.451-.332-.873-.572-1.226-.636a.7.7 0 0 0-.384.023M10.75 20.43a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5h-.01a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.816 5.699a.75.75 0 0 1 1.049-.16l3.89 2.858a.75.75 0 1 1-.889 1.208l-3.89-2.858a.75.75 0 0 1-.16-1.048"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGenerateTextAltOutline;
