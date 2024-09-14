import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasDayOutline = ({
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
      d="M15.912 2.865a.75.75 0 0 1 .75.75v3.223a.75.75 0 0 1-1.5 0V3.615a.75.75 0 0 1 .75-.75M8.087 2.865a.75.75 0 0 1 .75.75v3.223a.75.75 0 1 1-1.5 0V3.615a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.522 4.352h8.964c1.454 0 2.73.405 3.645 1.277.92.877 1.378 2.133 1.374 3.635v8.18c0 1.502-.46 2.76-1.38 3.639-.916.873-2.191 1.281-3.647 1.281l-8.956.001c-1.456 0-2.733-.417-3.648-1.304-.919-.89-1.379-2.163-1.379-3.684V9.264c0-1.503.462-2.759 1.384-3.635.916-.87 2.191-1.277 3.643-1.277m8.964 1.5H7.522c-1.182 0-2.045.328-2.61.864-.557.53-.917 1.355-.917 2.548v8.113c0 1.217.362 2.063.923 2.607.565.548 1.427.881 2.604.881h8.956c1.185 0 2.048-.33 2.61-.867.558-.533.917-1.36.917-2.554V9.261c.003-1.193-.353-2.017-.91-2.546-.56-.536-1.423-.863-2.61-.863"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.14a.75.75 0 0 1 .67.413c.876 1.747 1.849 3.317 2.964 4.625a.75.75 0 0 1-.57 1.236h-.139q.563.907 1.244 1.64a.75.75 0 0 1-.549 1.261H8.38a.75.75 0 0 1-.55-1.26q.682-.734 1.245-1.64h-.138a.75.75 0 0 1-.57-1.237C9.48 12.87 10.452 11.3 11.33 9.553A.75.75 0 0 1 12 9.14m-1.534 4.784a.75.75 0 0 1 .552 1.072q-.479.974-1.072 1.819h4.107a13.7 13.7 0 0 1-1.072-1.82.75.75 0 0 1 .552-1.07A25 25 0 0 1 12 11.494a25 25 0 0 1-1.534 2.43"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.998 16.815a.75.75 0 0 1 .75.75v3.553a.75.75 0 1 1-1.5 0v-3.553a.75.75 0 0 1 .75-.75M17.512 15.348a.75.75 0 0 1 1.061 0l.01.01a.75.75 0 1 1-1.06 1.06l-.01-.01a.75.75 0 0 1 0-1.06M7.629 10.79a.75.75 0 0 1 0 1.062l-.578.576a.75.75 0 0 1-1.06-1.061l.577-.577a.75.75 0 0 1 1.06 0M17.625 9.644a.75.75 0 0 1 0 1.06l-.694.694a.75.75 0 1 1-1.06-1.06l.693-.694a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasDayOutline;
