import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUniswapOutline = ({
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
      d="M6.29 20.452a2 2 0 0 1-.553-.075 3.22 3.22 0 0 1-2.218-1.76 3.84 3.84 0 0 1-.147-3.326c.228-.45.515-.868.852-1.245.388-.469.68-1.01.86-1.593.076-.215.154-.438.263-.69q.198-.383.448-.733.325-.454.742-.83c.345-.312.728-.58 1.14-.795a.75.75 0 1 1 .7 1.326 4 4 0 0 0-.834.582 3.6 3.6 0 0 0-.53.593 5 5 0 0 0-.317.508c-.065.158-.131.351-.2.536a6.1 6.1 0 0 1-1.13 2.063c-.257.284-.476.6-.651.94a2.34 2.34 0 0 0 .132 1.97 1.79 1.79 0 0 0 1.229 1 2.36 2.36 0 0 0 1.465-.394 6.9 6.9 0 0 1 2.982-1.393c.174-.024.506-.1.9-.184l.2-.043c1.45-.3 2.994-1.637 2.994-3.167a.75.75 0 1 1 1.5 0c0 2.338-2.173 4.226-4.186 4.636l-.187.04c-.456.1-.838.18-.978.2a5.5 5.5 0 0 0-2.335 1.117 4.3 4.3 0 0 1-2.141.717"
    />
    <Path
      fill={props.color}
      d="M9.258 13.15a.75.75 0 0 1-.75-.74 1.8 1.8 0 0 1 1.09-1.682c.218-.092.454-.14.691-.138a.75.75 0 1 1 0 1.5.27.27 0 0 0-.2.08.3.3 0 0 0-.086.219.75.75 0 0 1-.74.76zM21.014 15.099a.75.75 0 0 1-.675-.423 7.37 7.37 0 0 0-2.7-3.023 7.46 7.46 0 0 0-3.892-1.153h-.388a.75.75 0 0 1 0-1.5h.4a8.93 8.93 0 0 1 7.934 5.022.75.75 0 0 1-.675 1.077z"
    />
    <Path
      fill={props.color}
      d="M7.04 11.51a.75.75 0 0 1-.681-.437l-3.556-7.76a.75.75 0 0 1 1.207-.848l4.056 3.98a7 7 0 0 1 0-1.71.75.75 0 0 1 .73-.645 4.34 4.34 0 0 1 3.892 1.8c3.035-.407 5.5.713 6.808 3.106a.75.75 0 1 1-1.318.718c-1.418-2.6-4.151-2.544-5.653-2.281a.75.75 0 0 1-.7-.25c-.807-.935-1.245-1.444-2.315-1.568a9.3 9.3 0 0 0 .606 2.927.75.75 0 0 1-1.22.818L5.855 6.375l1.863 4.068a.75.75 0 0 1-.681 1.062zM16.49 21.749a.75.75 0 0 1-.53-.22c-1.244-1.241-3.474-.62-3.495-.612a.75.75 0 0 1-.43-1.438c.127-.037 3.1-.9 4.985.988a.75.75 0 0 1-.53 1.282M19.683 21.538a.75.75 0 0 1-.75-.75 10 10 0 0 0-1.643-5.01.75.75 0 0 1 1.227-.861 11.4 11.4 0 0 1 1.916 5.87.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystUniswapOutline;
