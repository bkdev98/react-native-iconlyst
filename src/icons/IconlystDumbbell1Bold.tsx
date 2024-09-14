import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbell1Bold = ({
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
      d="M19.51 4.491c-1.893-1.893-2.786-2.144-3.589-1.933-.975.205-3.244 2.374-3.462 3.512-.134.696.06 1.402.56 2.041.023.03.016.08-.015.112l-4.78 4.781c-.032.031-.082.037-.11.015-.646-.499-1.352-.692-2.044-.56-1.137.22-3.306 2.487-3.507 3.441-.213.826.035 1.717 1.927 3.61 1.545 1.544 2.423 1.993 3.132 1.993.16 0 .31-.022.458-.06.974-.206 3.242-2.374 3.461-3.512.133-.694-.06-1.4-.56-2.044-.023-.028-.016-.076.016-.108l4.78-4.782c.032-.03.081-.039.111-.015.645.5 1.352.693 2.042.56 1.138-.22 3.306-2.488 3.507-3.44.212-.827-.036-1.719-1.927-3.61"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDumbbell1Bold;
