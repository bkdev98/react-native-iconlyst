import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalCylinderDashBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M8.087 16.82c0-.13-.132-.216-.263-.216a.752.752 0 0 1-.431-1.365l.566-.397a.3.3 0 0 0 .128-.246V9.362c0-.11-.06-.207-.154-.263l-.067-.042-3.054-2.139c-.17-.119-.408-.032-.428.175q-.009.097-.009.197v9.721c0 .144.178.214.296.132l.508-.352a.75.75 0 1 1 .855 1.233l-.666.461c-.152.106-.179.33-.033.447q.03.025.064.048l2.216 1.552a.3.3 0 0 0 .472-.246zM17.965 18.024a.75.75 0 1 1 .855-1.233l.508.353c.118.082.297.01.297-.133V7.29q0-.099-.01-.196c-.018-.207-.257-.295-.427-.176l-3.05 2.134-.07.045a.31.31 0 0 0-.154.262v5.238a.3.3 0 0 0 .128.245l.374.262a.751.751 0 0 1-.431 1.364c-.039 0-.071.024-.071.062v3.754a.3.3 0 0 0 .472.246l2.218-1.552.062-.047c.145-.116.119-.34-.034-.445zM14.414 16.193a.3.3 0 0 0-.3-.3h-.57a.75.75 0 0 1 0-1.5h.57a.3.3 0 0 0 .3-.3V9.866a.3.3 0 0 0-.3-.3H9.887a.3.3 0 0 0-.3.3v4.227a.3.3 0 0 0 .3.3h.6a.75.75 0 0 1 0 1.5h-.6a.3.3 0 0 0-.3.3v5.144c0 .147.106.28.25.302q.069.011.137.012h4.052a1 1 0 0 0 .138-.012.305.305 0 0 0 .25-.302z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.72 7.824c.23.156.5.241.78.241H14.5c.28 0 .552-.085.785-.245l3.306-2.313c.06-.043.072-.143.012-.186L15.4 3.078a2.4 2.4 0 0 0-1.373-.428H9.974a2.4 2.4 0 0 0-1.377.431l-3.2 2.241c-.06.043-.048.142.013.184z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalCylinderDashBulk;
