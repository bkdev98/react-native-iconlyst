import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBowling3Bold = ({
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
      d="M18.398 15.227a.822.822 0 1 1 .003-1.645.822.822 0 0 1-.003 1.645m-1.728 2.448a.823.823 0 1 1 .001-1.645.823.823 0 0 1 0 1.645m-1.947-3.414a.823.823 0 1 1 1.643.001.823.823 0 0 1-1.643 0m.008-7.259a7.44 7.44 0 0 0-4.384 1.424.27.27 0 0 0-.112.271c.119.635.5 1.274 1.398 2.614 2.471 3.688 1.38 7.246-.19 9.526a.297.297 0 0 0 .11.44 7.5 7.5 0 0 0 3.178.722c4.135 0 7.5-3.364 7.5-7.499s-3.365-7.498-7.5-7.498"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.356 11.868c-1.229-1.836-1.655-2.59-1.613-3.827.013-.386.185-.855.368-1.351.412-1.118.924-2.51-.233-3.744-.634-.621-1.474-.974-2.304-.944-.789.019-1.504.352-2.068.963-1.14 1.237-.626 2.609-.212 3.71.188.5.366.97.366 1.349 0 1.228-.403 2.037-1.613 3.844-2.766 4.13-.445 8.097 1.365 9.792.237.22.552.34.887.34h2.805a1.3 1.3 0 0 0 .89-.342c1.807-1.693 4.13-5.66 1.362-9.79"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBowling3Bold;
