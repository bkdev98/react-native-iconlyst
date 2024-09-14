import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrellaLightningOutline = ({
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
      fillRule="evenodd"
      d="M14.952 9.843a.75.75 0 0 1 .966-.437 9.04 9.04 0 0 1 5.843 8.453.75.75 0 0 1-.736.75c-.82.015-1.374.07-1.857.21-.472.136-.918.364-1.494.786a.75.75 0 0 1-.71.096c-1.746-.665-3.012-.974-4.243-.977-1.23-.003-2.493.3-4.232.975a.75.75 0 0 1-.702-.085c-.534-.374-.97-.597-1.453-.742-.494-.148-1.076-.225-1.923-.264a.75.75 0 0 1-.716-.749c0-3.5 1.991-6.534 4.898-8.033a.75.75 0 0 1 .688 1.333 7.54 7.54 0 0 0-4.054 6 7.7 7.7 0 0 1 1.537.276 6 6 0 0 1 1.55.726c1.65-.615 3.016-.94 4.41-.937 1.391.003 2.754.333 4.399.935.544-.364 1.058-.617 1.629-.782a7 7 0 0 1 1.475-.237 7.54 7.54 0 0 0-4.839-6.33.75.75 0 0 1-.436-.967"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.729 17.24a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-3.01a.75.75 0 0 1 .75-.75M20.467 4.321a.75.75 0 0 1 .205 1.04l-.457.683h.795a.75.75 0 0 1 .626 1.163l-1.26 1.908a.75.75 0 1 1-1.252-.827l.492-.744h-.807a.75.75 0 0 1-.623-1.168l1.24-1.85a.75.75 0 0 1 1.041-.205M6.104 4.321a.75.75 0 0 1 .205 1.04l-.458.683h.795a.75.75 0 0 1 .626 1.163l-1.26 1.908a.75.75 0 1 1-1.25-.827l.49-.744h-.807a.75.75 0 0 1-.623-1.168l1.241-1.85a.75.75 0 0 1 1.04-.205M11.843 3.704l-1.282 3.128h1.057c.665 0 1.148.63.977 1.272l-.232.87 1.955-2.232h-1.052a1.01 1.01 0 0 1-.936-1.393l.701-1.645zm-1.27-.855c.15-.388.524-.645.942-.645h2.256a1.01 1.01 0 0 1 .936 1.392l-.7 1.646h1.39c.868 0 1.333 1.024.76 1.678l-.413-.362.413.362-4.044 4.615c-.705.805-2.014.107-1.738-.927l.607-2.276h-1.15a1.01 1.01 0 0 1-.939-1.386z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUmbrellaLightningOutline;
