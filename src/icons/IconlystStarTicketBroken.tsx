import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStarTicketBroken = ({
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
      d="M9.466 5.434V8.99M9.466 15.012v3.556M12.074 11.758l.839.805a.34.34 0 0 1 .1.305l-.198 1.137a.347.347 0 0 0 .506.363l1.037-.537a.35.35 0 0 1 .325 0l1.035.537a.347.347 0 0 0 .507-.363l-.198-1.137a.34.34 0 0 1 .1-.305l.839-.806a.344.344 0 0 0-.194-.587l-1.159-.167a.35.35 0 0 1-.263-.188l-.518-1.035a.352.352 0 0 0-.624 0l-.519 1.035"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.818 5.433H7.771c-.94 0-1.703.762-1.703 1.703v.038a.643.643 0 0 1-.643.643c-.887 0-1.607.72-1.607 1.607v5.153c0 .888.72 1.608 1.607 1.608.355 0 .643.287.643.642v.039c0 .94.762 1.702 1.703 1.702h10.094c.94 0 1.703-.762 1.703-1.702v-.039c0-.355.288-.643.643-.643.888 0 1.607-.719 1.607-1.607V9.424c0-.888-.72-1.607-1.607-1.607a.643.643 0 0 1-.643-.643v-.038c0-.94-.762-1.703-1.703-1.703h-.942"
    />
  </Svg>
);
export default IconlystStarTicketBroken;
