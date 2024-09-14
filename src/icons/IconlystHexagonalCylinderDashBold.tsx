import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalCylinderDashBold = ({
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
      d="M8.087 17.54c0-.13-.132-.215-.263-.215a.752.752 0 0 1-.431-1.365l.566-.398a.3.3 0 0 0 .128-.245v-5.235c0-.109-.06-.207-.154-.262l-.067-.042-3.054-2.14c-.17-.118-.408-.032-.428.176q-.009.097-.009.197v9.72c0 .144.178.215.296.133l.508-.352a.75.75 0 1 1 .855 1.233l-.666.46c-.152.107-.179.331-.033.447q.03.025.064.049l2.216 1.551a.3.3 0 0 0 .472-.246zM8.72 8.545c.23.156.5.24.78.24H14.5c.28 0 .552-.084.785-.244l3.306-2.314c.06-.042.072-.142.012-.185L15.4 3.799a2.4 2.4 0 0 0-1.373-.428H9.974a2.4 2.4 0 0 0-1.377.43l-3.2 2.242c-.06.043-.048.141.013.183zM17.965 18.744a.75.75 0 1 1 .855-1.232l.508.352c.118.082.297.011.297-.133v-9.72q0-.098-.01-.195c-.018-.208-.257-.295-.427-.176l-3.05 2.133q-.033.023-.07.045a.31.31 0 0 0-.154.263v5.237a.3.3 0 0 0 .128.246l.374.262a.751.751 0 0 1-.431 1.364c-.039 0-.071.023-.071.062v3.754a.3.3 0 0 0 .472.246l2.218-1.553.062-.047c.145-.116.119-.339-.034-.445zM14.414 16.913a.3.3 0 0 0-.3-.3h-.57a.75.75 0 0 1 0-1.5h.57a.3.3 0 0 0 .3-.3v-4.227a.3.3 0 0 0-.3-.3H9.887a.3.3 0 0 0-.3.3v4.227a.3.3 0 0 0 .3.3h.6a.75.75 0 0 1 0 1.5h-.6a.3.3 0 0 0-.3.3v5.144c0 .147.106.28.25.303q.069.01.137.011h4.052a1 1 0 0 0 .138-.011.305.305 0 0 0 .25-.303z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalCylinderDashBold;
