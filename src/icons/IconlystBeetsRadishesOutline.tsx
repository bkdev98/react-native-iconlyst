import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBeetsRadishesOutline = ({
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
      d="M16.62 13.09c-1.693-1.692-3.933-1.774-5.031-.676-.909.908-.984 2.089-.804 3.415.056.412.124.769.192 1.128.05.257.099.516.144.796.038.236.073.49.088.748.275.013.547.05.8.09.255.041.522.092.786.142l.169.032c.323.06.644.119.967.163 1.304.178 2.456.104 3.366-.806 1.098-1.098 1.016-3.338-.677-5.031m-6.092-1.737c1.893-1.892 5.107-1.368 7.153.677s2.57 5.26.677 7.153c-1.424 1.423-3.195 1.427-4.63 1.231a21 21 0 0 1-1.22-.209c-.263-.05-.504-.095-.735-.132-.593-.095-.949-.099-1.16-.03a.75.75 0 0 1-.938-.965c.059-.165.061-.488-.035-1.086a28 28 0 0 0-.12-.668c-.077-.41-.164-.872-.222-1.294-.196-1.446-.195-3.251 1.23-4.677"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.305 7.546c1.904-1.903 4.91-2.404 6.69-.625 1.342 1.342 1.456 2.902 1.495 3.432q.007.132.018.173a.75.75 0 1 1-1.443.411 4 4 0 0 1-.117-.72c-.068-.652-.143-1.365-1.014-2.236-.984-.984-3.017-.925-4.568.626-1.551 1.55-1.61 3.584-.626 4.569.79.79 1.782.886 2.926.746a.75.75 0 0 1 .182 1.489c-1.302.159-2.886.108-4.168-1.175-1.78-1.779-1.278-4.786.625-6.69M15.578 14.545a.75.75 0 0 1 1.02.292c.431.779.482 1.841-.232 2.556a.75.75 0 0 1-1.06-1.061c.1-.1.195-.38-.02-.768a.75.75 0 0 1 .292-1.02M16.98 8.002a.75.75 0 0 1 .93.51c.12.407.252 1.073.291 1.816.039.737-.011 1.613-.309 2.4a.75.75 0 1 1-1.403-.531c.195-.516.247-1.158.214-1.79a7 7 0 0 0-.232-1.475.75.75 0 0 1 .51-.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.72 12.787a.75.75 0 0 0-.51-.93 8.4 8.4 0 0 0-1.816-.291c-.737-.039-1.612.011-2.4.309a.75.75 0 1 0 .531 1.403c.516-.195 1.158-.248 1.79-.214a7 7 0 0 1 1.475.232.75.75 0 0 0 .93-.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.16 8.64a.75.75 0 0 1-.014 1.06L17.758 13a.75.75 0 1 1-1.047-1.075l3.388-3.3a.75.75 0 0 1 1.061.014M7.02 3.524a.75.75 0 0 0-.93.51 8.4 8.4 0 0 0-.291 1.817c-.039.737.011 1.612.309 2.4a.75.75 0 0 0 1.403-.532c-.195-.515-.248-1.158-.214-1.79a7 7 0 0 1 .232-1.475.75.75 0 0 0-.51-.93"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.28 8.309a.75.75 0 0 1 .51-.93 8.4 8.4 0 0 1 1.816-.29c.737-.04 1.612.01 2.4.308A.75.75 0 0 1 6.475 8.8c-.516-.195-1.158-.247-1.79-.214a7 7 0 0 0-1.475.233.75.75 0 0 1-.93-.51"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.84 4.162a.75.75 0 0 0 .014 1.06l3.388 3.3A.75.75 0 0 0 7.29 7.447L3.9 4.147a.75.75 0 0 0-1.061.015"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBeetsRadishesOutline;