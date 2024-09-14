import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallRingingOutline = ({
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
      d="M4.796 5.35a2 2 0 0 1-.114.115l-.003.003c-.04.039-.077.076-.118.12a2 2 0 0 0-.262.336c-.166.27-.333.69-.293 1.338.082 1.34 1.057 3.76 5.05 7.753 3.995 3.993 6.414 4.966 7.754 5.047.648.04 1.068-.127 1.337-.293.14-.087.25-.18.337-.263.043-.041.08-.079.119-.118l.004-.004.006-.007c.023-.023.064-.066.11-.107.693-.694 1.078-1.19 1.268-1.562.176-.345.163-.533.113-.683-.067-.205-.246-.46-.633-.858a25 25 0 0 0-.653-.635l-.014-.013a44 44 0 0 1-.8-.775c-.464-.464-.77-.51-1.007-.492-.15.011-.321.054-.54.13a10 10 0 0 0-.383.146q-.17.068-.358.138c-.563.206-1.278.408-2.14.236-.855-.17-1.745-.683-2.734-1.672S9.34 11.35 9.17 10.497c-.172-.862.029-1.577.235-2.14q.07-.189.137-.36l.014-.037c.05-.125.093-.237.13-.345.077-.219.12-.39.131-.54.018-.238-.029-.543-.493-1.007-.29-.29-.55-.564-.783-.81l-.005-.005c-.238-.25-.443-.466-.635-.654-.397-.388-.652-.567-.856-.635-.15-.05-.337-.063-.682.113-.373.191-.87.577-1.566 1.272m4.827-1.13c.236.249.485.511.761.787.714.714.984 1.43.928 2.178a3.6 3.6 0 0 1-.21.926q-.074.207-.15.395l-.014.037c-.045.114-.086.22-.126.328-.171.47-.264.872-.172 1.332.093.467.4 1.104 1.263 1.966s1.499 1.17 1.966 1.262c.46.092.86-.001 1.33-.174q.16-.059.328-.125l.037-.015c.125-.049.26-.101.395-.149a3.6 3.6 0 0 1 .926-.212c.748-.056 1.464.213 2.179.927.273.273.532.52.777.753l.01.01c.246.233.483.458.693.674.407.417.801.88.984 1.434.202.608.117 1.214-.201 1.836-.302.59-.828 1.225-1.562 1.96l-.046.042-.04.04-.007.007a6 6 0 0 1-.155.154c-.138.132-.33.296-.582.452-.514.317-1.238.574-2.215.515-1.91-.116-4.663-1.425-8.724-5.484-4.06-4.06-5.37-6.814-5.487-8.723-.06-.977.196-1.702.513-2.216.155-.252.32-.444.45-.582a13.19 13.19 0 0 1 .161-.162l.041-.04.042-.046c.737-.736 1.373-1.263 1.963-1.565.623-.319 1.23-.403 1.838-.201.552.184 1.016.579 1.432.986.214.21.438.445.67.69zM13.979 6.328a.75.75 0 0 1 .879-.593A4.86 4.86 0 0 1 18.7 9.577a.75.75 0 0 1-1.473.286 3.36 3.36 0 0 0-2.655-2.656.75.75 0 0 1-.593-.879"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.97 3.099a.75.75 0 0 1 .828-.663 8.15 8.15 0 0 1 7.197 7.19.75.75 0 1 1-1.49.167 6.65 6.65 0 0 0-5.873-5.866.75.75 0 0 1-.662-.828"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCallRingingOutline;
