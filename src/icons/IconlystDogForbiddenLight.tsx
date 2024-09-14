import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogForbiddenLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.55a9.25 9.25 0 1 0 0-18.5 9.25 9.25 0 0 0 0 18.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.802 14.575c-.594 1.465-1.788 2.98-2.976 4.498M12.8 13.072c.066.056 1.41.41 3.22.726 1.812.316 2.447-1.778 2.538-2.864l-2.854-1.419c0-.667-.38-1.972-2.146-2.196l-1.003-.138c-1.128-.166-2.323.064-3.205 1.165l-.5.692M8.078 11.438l-.75 2.514s1.811.815 3.065 0M13.337 21.237c-.146-1.816-.412-3.315-.334-4.96"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.972 16.63c1.174.836 4.143 2.232 6.624 1.131M13.22 9.901v.011M18.516 18.817 5.483 5.784"
    />
  </Svg>
);
export default IconlystDogForbiddenLight;
