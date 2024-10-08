import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGithubBulk = ({
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
      d="M9.306 16.741a3.4 3.4 0 0 0-.316 1.675v.213c-.768.175-1.329.154-1.776.012l-.817-.478c-.266-.237-.497-.52-.734-.821h-.001c-.46-.585-.936-1.188-1.734-1.387a.685.685 0 0 0-.833.5.69.69 0 0 0 .5.832c.343.085.642.465.988.905l.004.004c.736.934 1.813 2.3 4.405 1.831q-.003.03-.002.058a.686.686 0 0 0 .687.683h.003l5.914-.027a.687.687 0 0 0 .684-.687l-.003-1.584a3.5 3.5 0 0 0-.309-1.743c-2.827.617-5.618.267-6.66.014"
    />
    <Path
      fill={props.color}
      d="M19.745 6.967a5.24 5.24 0 0 1 1.18 3.327c0 4.594-2.58 5.96-4.96 6.432-2.826.58-5.617.252-6.659.015-2.378-.5-4.964-1.883-4.964-6.42a5.25 5.25 0 0 1 1.18-3.354 4.96 4.96 0 0 1 .22-3.296.68.68 0 0 1 .437-.389c.209-.062 1.343-.284 3.62 1.172a11.9 11.9 0 0 1 5.67 0C17.745 3 18.88 3.22 19.09 3.282c.196.058.358.2.438.39a4.96 4.96 0 0 1 .218 3.295"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGithubBulk;
