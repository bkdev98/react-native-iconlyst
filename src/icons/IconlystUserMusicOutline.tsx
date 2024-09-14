import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserMusicOutline = ({
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
      d="M12.326 21.752A9.425 9.425 0 0 1 3.93 8.056a9.42 9.42 0 0 1 9.569-5.077.75.75 0 0 1-.184 1.488 7.923 7.923 0 1 0 6.934 7.862.75.75 0 1 1 1.5 0 9.434 9.434 0 0 1-9.423 9.423"
    />
    <Path
      fill={props.color}
      d="M17.653 9.953a2.543 2.543 0 1 1 0-5.086 2.543 2.543 0 0 1 0 5.086m0-3.586a1.043 1.043 0 1 0 0 2.086 1.043 1.043 0 0 0 0-2.086"
    />
    <Path
      fill={props.color}
      d="M19.448 8.166a.75.75 0 0 1-.75-.75V3a.75.75 0 0 1 1.45-.27 1.75 1.75 0 0 0 1.17 1 .75.75 0 0 1-.3 1.47 3 3 0 0 1-.82-.3v2.513a.75.75 0 0 1-.75.752M16.592 20.66a.75.75 0 0 1-.744-.66c-.061-.504-.5-2.148-3.527-2.148-3 0-3.448 1.63-3.512 2.129a.76.76 0 0 1-.84.648.75.75 0 0 1-.647-.84c.213-1.662 1.639-3.437 5-3.437 3.388 0 4.813 1.792 5.017 3.467a.752.752 0 0 1-.747.84M12.33 15.514a3.218 3.218 0 1 1 0-6.436 3.218 3.218 0 0 1 0 6.436m0-4.937a1.719 1.719 0 1 0 0 3.437 1.719 1.719 0 0 0 0-3.437"
    />
  </Svg>
);
export default IconlystUserMusicOutline;
