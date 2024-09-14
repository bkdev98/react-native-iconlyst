import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4GCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 4.625a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75c0 5.384-4.365 9.75-9.75 9.75s-9.75-4.366-9.75-9.75m7.965-3.36c.31.1.52.388.52.714v3.288h.26a.75.75 0 1 1 0 1.5h-.26v.44a.75.75 0 1 1-1.5 0v-.44H7.332a.75.75 0 0 1-.609-1.188L9.626 9.79a.75.75 0 0 1 .84-.276m-.98 4.002v-.96l-.69.96zm3.022-.837c.071-1.722 1.5-3.283 3.339-3.192.47.024.919.144 1.322.344a.75.75 0 0 1-.668 1.344 1.8 1.8 0 0 0-.73-.19c-.891-.044-1.723.747-1.764 1.756-.049 1.157.69 1.96 1.67 1.96.368 0 .558-.07.639-.126a.2.2 0 0 0 .063-.074.54.54 0 0 0 .038-.23v-.68h-.74a.75.75 0 0 1 0-1.5h1.49a.75.75 0 0 1 .75.75v1.43c0 .638-.242 1.18-.736 1.53-.447.315-1.002.4-1.504.4-1.99 0-3.246-1.677-3.17-3.522"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4GCircleOutline;
