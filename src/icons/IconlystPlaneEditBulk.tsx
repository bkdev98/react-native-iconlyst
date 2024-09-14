import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneEditBulk = ({
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
      d="M8.968 15.807a682 682 0 0 0 9.797-4.054c1.36-.568 2.512-1.934 2.085-3.444-.189-.678-.602-1.197-1.194-1.502-1.133-.584-2.482-.203-3.014-.01-1.027.378-2.053.828-3.036 1.255l-.01-.012a179 179 0 0 0-3.44-3.073c-.788-.69-1.607-.94-2.44-.745-.463.11-.9.279-1.324.442q-.249.097-.507.19a.753.753 0 0 0-.438.993l1.964 4.755-.724.308c-.897.382-1.91.814-2.71 1.15l-.282-.683a.75.75 0 0 0-1.389.568c.087.21.43 1.046.52 1.26.846 1.983 2.3 3.036 4.072 3.036.652 0 1.347-.143 2.07-.434"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.554 19.45H4.868a.75.75 0 0 0 0 1.5h7.686a.75.75 0 0 0 0-1.5M20.17 15.865l-2.963 3.256a1 1 0 0 1-.606.337l-.018.003-.76.13-.124.018.01-.127.085-.784a1.06 1.06 0 0 1 .262-.594l2.987-3.293a.3.3 0 0 1 .22-.096.3.3 0 0 1 .194.074l.701.652a.3.3 0 0 1 .011.424m1.007-1.524-.7-.652a1.8 1.8 0 0 0-2.539.107l-2.994 3.301a2.57 2.57 0 0 0-.64 1.441l-.087.782c-.054.5.125.985.49 1.331a1.59 1.59 0 0 0 1.37.419l.751-.128a2.52 2.52 0 0 0 1.494-.817l2.956-3.25a1.804 1.804 0 0 0-.1-2.534"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaneEditBulk;
