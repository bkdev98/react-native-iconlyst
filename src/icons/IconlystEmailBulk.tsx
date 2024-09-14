import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailBulk = ({
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
      d="M21.5 8.898c0-.31-.032-.606-.08-.896a6 6 0 0 0-.132-.63q-.006-.03-.012-.059l-.003.003a5.7 5.7 0 0 0-.591-1.455l.007-.005q-.016-.025-.034-.05-.01-.014-.02-.03a5 5 0 0 0-.564-.744q-.029-.034-.058-.066a5 5 0 0 0-.707-.627l-.056-.038a5 5 0 0 0-.801-.46l-.041-.022a5 5 0 0 0-.877-.284q-.09-.02-.183-.037a5 5 0 0 0-.938-.097H7.591a5.3 5.3 0 0 0-.983.102q-.051.01-.102.02a4.84 4.84 0 0 0-3.218 2.332l.023.02c-.262.44-.45.933-.588 1.454l-.01-.008c-.013.053-.02.11-.033.163a7 7 0 0 0-.098.49 6 6 0 0 0-.082.924V15.1l.001.006q.002.603.108 1.163c.007.037.022.071.03.108.068.332.156.653.274.955.068.177.162.335.245.501.071.138.13.284.211.414.172.281.37.535.586.772l.006.007c.049.055.087.122.139.174.9.9 2.1 1.4 3.5 1.4h8.8q.495 0 .968-.096a4.8 4.8 0 0 0 2.389-1.195c.046-.039.098-.068.143-.109.017-.017.029-.039.045-.056.968-.982 1.554-2.389 1.555-4.04z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m4.499 6.84 5.875 4.78c1.005.771 2.315.777 3.246.004l5.876-4.794c.243.462.4.988.46 1.56l-5.382 4.391a3.93 3.93 0 0 1-2.535.912 4.26 4.26 0 0 1-2.597-.898l-5.4-4.393c.06-.572.215-1.099.457-1.562"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailBulk;
