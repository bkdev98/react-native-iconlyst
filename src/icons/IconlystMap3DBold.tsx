import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMap3DBold = ({
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
      d="M15.55 8.257c-.37.05-.65.37-.65.75v5.35a24 24 0 0 0-4.8 0v-5.35c0-.38-.28-.7-.65-.75-3.35-.46-4.86-1.53-4.86-2.14 0-.6 1.55-1.7 4.87-2.16 1.93-.27 4.14-.28 6.09 0 3.31.46 4.86 1.56 4.86 2.16 0 .61-1.51 1.68-4.86 2.14m.21-5.78c-2.09-.3-4.43-.3-6.51 0-3.86.53-6.16 1.89-6.16 3.64v11.97c0 1.75 2.3 3.11 6.16 3.65a.671.671 0 0 0 .38-.05c.03-.01.05-.03.08-.04.05-.03.1-.06.15-.11.02-.02.04-.05.07-.08.03-.04.06-.09.09-.14.02-.03.03-.07.04-.11s.03-.07.03-.11v-.05c0-.02.01-.03.01-.05v-5.13c.78-.09 1.59-.14 2.4-.14s1.62.05 2.4.14v5.13c0 .02.01.03.01.05v.05c0 .04.02.08.03.11.02.04.02.08.04.11.03.05.06.1.1.14.02.03.04.06.06.08.05.05.1.08.15.11.03.01.05.03.08.04.09.04.18.06.28.06.04 0 .07 0 .11-.01 3.85-.54 6.15-1.9 6.15-3.65V6.117c0-1.75-2.3-3.11-6.15-3.64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMap3DBold;
