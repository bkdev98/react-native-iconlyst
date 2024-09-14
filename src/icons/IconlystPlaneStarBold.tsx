import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneStarBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.95 15.558a562 562 0 0 0 9.768-4.035c1.354-.568 2.503-1.933 2.08-3.444-.19-.674-.602-1.191-1.192-1.494-1.129-.58-2.477-.2-3.002-.01-1.019.367-2.003.799-3.036 1.249l-.002-.002c-1.23-1.14-2.48-2.237-3.429-3.063-.797-.701-1.616-.952-2.436-.746-.436.104-.849.26-1.248.41q-.278.109-.567.21a.75.75 0 0 0-.449.994l1.958 4.743c-.487.205-1.05.445-1.618.686-.63.268-1.264.538-1.802.765l-.187-.453-.092-.223a.75.75 0 1 0-1.386.573l.092.222c.136.33.355.862.425 1.026.844 1.977 2.293 3.026 4.057 3.026.651 0 1.344-.143 2.066-.434M19.267 17.618a.98.98 0 0 0-.328.924l.105.588-.527-.274a.98.98 0 0 0-.945-.01l-.555.29.105-.602c.058-.344-.067-.693-.29-.883l-.44-.424.684-.098c.29-.073.532-.26.677-.535l.276-.558.264.53a.98.98 0 0 0 .767.578l.606.086zm2.268-1.36c-.165-.2-.39-.33-.643-.369l-1.357-.193-.61-1.228q-.018-.039-.043-.074a1.2 1.2 0 0 0-.405-.373 1.01 1.01 0 0 0-.76-.054.98.98 0 0 0-.584.501l-.608 1.228-1.385.197a1.06 1.06 0 0 0-.549.286c-.377.388-.377 1 .019 1.412l.989.952-.236 1.331c-.037.205-.008.427.107.662a1 1 0 0 0 .873.511c.157 0 .316-.036.466-.11l1.226-.64 1.172.607a.98.98 0 0 0 .662.13.98.98 0 0 0 .65-.396c.157-.212.224-.483.18-.757l-.236-1.337.953-.926c.386-.335.447-.922.119-1.36M12.119 19.192H4.864a.75.75 0 0 0 0 1.5h7.255a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneStarBold;