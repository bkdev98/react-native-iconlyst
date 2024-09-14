import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageStarOutline = ({
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
      d="M4.19 3.869C5.16 2.83 6.538 2.25 8.163 2.25h8.265c1.63 0 3.008.58 3.975 1.619.961 1.033 1.46 2.458 1.46 4.056v3.973a.75.75 0 1 1-1.5 0V10.11H4.228v5.6c0 1.29.399 2.327 1.058 3.035.654.702 1.618 1.141 2.877 1.141h1.716a.75.75 0 1 1 0 1.5H8.162c-1.63 0-3.008-.58-3.975-1.619-.961-1.033-1.46-2.458-1.46-4.056V7.925c0-1.599.501-3.024 1.464-4.056m.037 4.741h16.136v-.685c0-1.288-.4-2.326-1.059-3.034-.653-.702-1.618-1.141-2.877-1.141H8.162c-1.254 0-2.219.439-2.874 1.141-.66.709-1.061 1.746-1.061 3.034zm1.721-2.132a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.437 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.436 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m6.198 8.728.51 1.018v.002c.184.366.535.615.936.674l1.125.16-.802.771-.002.002a1.23 1.23 0 0 0-.363 1.105v.001l.192 1.102-1.02-.529-.004-.002a1.26 1.26 0 0 0-1.143 0l-1.025.531.192-1.103v-.003a1.24 1.24 0 0 0-.362-1.101m0 0-.805-.773 1.118-.16.002-.001c.407-.057.754-.31.938-.67l.513-1.024m.577-1.668a1.25 1.25 0 0 0-1.686.533l-.683 1.363-1.513.218a1.238 1.238 0 0 0-.692 2.119l1.091 1.048-.258 1.478v.008c-.045.268 0 .54.126.781l.002.004a1.246 1.246 0 0 0 1.678.517l.004-.001 1.354-.703 1.356.703c.24.127.512.169.773.128h.005a1.245 1.245 0 0 0 1.03-1.428l-.259-1.487 1.093-1.05c.203-.195.33-.452.368-.727M19.9 18.678v.002zm-2.304-5.14c.232.12.415.308.532.532l.005.011.677 1.353 1.515.217c.674.091 1.15.711 1.06 1.39"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageStarOutline;
