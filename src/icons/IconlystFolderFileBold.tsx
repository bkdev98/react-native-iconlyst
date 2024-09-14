import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileBold = ({
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
      d="M4.875 12.96a.2.2 0 0 0 .173-.1l1.11-1.92c.695-1.208 1.647-2.003 2.753-2.3 1.106-.298 2.327-.088 3.533.609l4.57 2.639a7.3 7.3 0 0 1 1.396 1.016.2.2 0 0 0 .14.057h2.74a.2.2 0 0 0 .2-.2l.01-1.763c0-3.844-1.622-5.634-5.106-5.634h-2.65a1.66 1.66 0 0 1-1.315-.656l-.856-1.14a2.65 2.65 0 0 0-2.11-1.054H7.588C4.164 2.514 2.5 4.42 2.5 8.342v4.419c0 .11.09.2.2.2z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.3 10.087c-.723.194-1.343.733-1.844 1.602l-.561.971a.2.2 0 0 0 .173.3H15.5c.103 0 .139-.135.05-.186l-3.855-2.227c-.866-.5-1.672-.656-2.394-.46M2.7 14.46a.2.2 0 0 0-.2.2v.993c0 3.653 2.185 5.833 5.845 5.833h7.296c3.652 0 5.833-2.18 5.833-5.83l.005-.995a.2.2 0 0 0-.2-.2z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileBold;
